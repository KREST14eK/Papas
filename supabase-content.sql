-- MS Poker content storage and admin policies.
-- Run in Supabase Dashboard -> SQL Editor after checking your existing RLS setup.
-- This creates a separate table and does not alter existing courses/posts tables.

create table if not exists public.ms_poker_content (
    id uuid primary key default gen_random_uuid(),
    kind text not null check (kind in ('course', 'post', 'stream', 'schedule')),
    title text not null,
    summary text not null default '',
    body text not null default '',
    media_url text,
    video_url text,
    live_video_id text,
    scheduled_at timestamptz,
    status text not null default 'draft' check (status in ('draft', 'published', 'live', 'ended')),
    created_by uuid references auth.users(id) on delete set null,
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now()
);

create index if not exists ms_poker_content_public_idx
    on public.ms_poker_content (kind, status, scheduled_at);

create table if not exists public.ms_poker_lessons (
    id uuid primary key default gen_random_uuid(),
    course_id uuid not null references public.ms_poker_content(id) on delete cascade,
    title text not null,
    description text not null default '',
    duration_minutes integer not null check (duration_minutes between 1 and 15),
    position integer not null check (position between 1 and 30),
    video_url text,
    media_url text,
    status text not null default 'draft' check (status in ('draft', 'published')),
    created_by uuid references auth.users(id) on delete set null,
    created_at timestamptz not null default now(),
    unique (course_id, position),
    check ((video_url is null) <> (media_url is null))
);

create index if not exists ms_poker_lessons_course_order_idx
    on public.ms_poker_lessons (course_id, position);

alter table public.ms_poker_content enable row level security;
grant select on public.ms_poker_content to anon, authenticated;
grant insert, update, delete on public.ms_poker_content to authenticated;
alter table public.ms_poker_lessons enable row level security;
grant select on public.ms_poker_lessons to anon, authenticated;
grant insert, update, delete on public.ms_poker_lessons to authenticated;

alter table public.profiles enable row level security;
revoke insert, update, delete on public.profiles from anon, authenticated;
grant select on public.profiles to authenticated;
drop policy if exists ms_poker_profiles_read_own on public.profiles;
create policy ms_poker_profiles_read_own
    on public.profiles for select to authenticated
    using (id = (select auth.uid()));

drop policy if exists ms_poker_content_read_published on public.ms_poker_content;
create policy ms_poker_content_read_published
    on public.ms_poker_content for select to anon, authenticated
    using (status in ('published', 'live'));

drop policy if exists ms_poker_content_admin_read on public.ms_poker_content;
create policy ms_poker_content_admin_read
    on public.ms_poker_content for select to authenticated
    using (
        exists (
            select 1 from public.profiles p
            where p.id = (select auth.uid()) and p.role = 'admin'
        )
    );

drop policy if exists ms_poker_content_admin_insert on public.ms_poker_content;
create policy ms_poker_content_admin_insert
    on public.ms_poker_content for insert to authenticated
    with check (
        created_by = (select auth.uid())
        and exists (
            select 1 from public.profiles p
            where p.id = (select auth.uid()) and p.role = 'admin'
        )
    );

drop policy if exists ms_poker_content_admin_update on public.ms_poker_content;
create policy ms_poker_content_admin_update
    on public.ms_poker_content for update to authenticated
    using (
        exists (
            select 1 from public.profiles p
            where p.id = (select auth.uid()) and p.role = 'admin'
        )
    )
    with check (
        exists (
            select 1 from public.profiles p
            where p.id = (select auth.uid()) and p.role = 'admin'
        )
    );

drop policy if exists ms_poker_content_admin_delete on public.ms_poker_content;
create policy ms_poker_content_admin_delete
    on public.ms_poker_content for delete to authenticated
    using (
        exists (
            select 1 from public.profiles p
            where p.id = (select auth.uid()) and p.role = 'admin'
        )
    );

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
    'ms-poker-media',
    'ms-poker-media',
    true,
    104857600,
    array['image/jpeg', 'image/png', 'image/webp', 'video/mp4', 'video/webm']
)
on conflict (id) do nothing;

drop policy if exists ms_poker_media_public_read on storage.objects;
create policy ms_poker_media_public_read
    on storage.objects for select to anon, authenticated
    using (bucket_id = 'ms-poker-media');

drop policy if exists ms_poker_media_admin_insert on storage.objects;
create policy ms_poker_media_admin_insert
    on storage.objects for insert to authenticated
    with check (
        bucket_id = 'ms-poker-media'
        and exists (
            select 1 from public.profiles p
            where p.id = (select auth.uid()) and p.role = 'admin'
        )
    );

drop policy if exists ms_poker_media_admin_update on storage.objects;
create policy ms_poker_media_admin_update
    on storage.objects for update to authenticated
    using (
        bucket_id = 'ms-poker-media'
        and exists (
            select 1 from public.profiles p
            where p.id = (select auth.uid()) and p.role = 'admin'
        )
    )
    with check (
        bucket_id = 'ms-poker-media'
        and exists (
            select 1 from public.profiles p
            where p.id = (select auth.uid()) and p.role = 'admin'
        )
    );

drop policy if exists ms_poker_media_admin_delete on storage.objects;
create policy ms_poker_media_admin_delete
    on storage.objects for delete to authenticated
    using (
        bucket_id = 'ms-poker-media'
        and exists (
            select 1 from public.profiles p
            where p.id = (select auth.uid()) and p.role = 'admin'
        )
    );

drop policy if exists ms_poker_lessons_read_published on public.ms_poker_lessons;
create policy ms_poker_lessons_read_published
    on public.ms_poker_lessons for select to anon, authenticated
    using (
        status = 'published'
        and exists (
            select 1 from public.ms_poker_content c
            where c.id = course_id and c.kind = 'course' and c.status = 'published'
        )
    );

drop policy if exists ms_poker_lessons_admin_read on public.ms_poker_lessons;
create policy ms_poker_lessons_admin_read
    on public.ms_poker_lessons for select to authenticated
    using (
        exists (
            select 1 from public.profiles p
            where p.id = (select auth.uid()) and p.role = 'admin'
        )
    );

drop policy if exists ms_poker_lessons_admin_insert on public.ms_poker_lessons;
create policy ms_poker_lessons_admin_insert
    on public.ms_poker_lessons for insert to authenticated
    with check (
        created_by = (select auth.uid())
        and exists (
            select 1 from public.profiles p
            where p.id = (select auth.uid()) and p.role = 'admin'
        )
        and exists (
            select 1 from public.ms_poker_content c
            where c.id = course_id and c.kind = 'course'
        )
    );

drop policy if exists ms_poker_lessons_admin_update on public.ms_poker_lessons;
create policy ms_poker_lessons_admin_update
    on public.ms_poker_lessons for update to authenticated
    using (
        exists (
            select 1 from public.profiles p
            where p.id = (select auth.uid()) and p.role = 'admin'
        )
    )
    with check (
        exists (
            select 1 from public.profiles p
            where p.id = (select auth.uid()) and p.role = 'admin'
        )
    );

drop policy if exists ms_poker_lessons_admin_delete on public.ms_poker_lessons;
create policy ms_poker_lessons_admin_delete
    on public.ms_poker_lessons for delete to authenticated
    using (
        exists (
            select 1 from public.profiles p
            where p.id = (select auth.uid()) and p.role = 'admin'
        )
    );