-- WARNING: This schema is for context only and is not meant to be run.
-- Table order and constraints may not be valid for execution.

CREATE TABLE public.automatic_evaluation (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  num_microdata integer NOT NULL,
  num_microformats integer NOT NULL,
  num_rdfa integer NOT NULL,
  num_jsonld integer NOT NULL,
  num_vocabularies integer NOT NULL,
  num_ontologies integer NOT NULL,
  num_datasets integer NOT NULL,
  fair_score integer NOT NULL,
  f1_score integer NOT NULL,
  f2_score integer NOT NULL,
  f3_score integer NOT NULL,
  f4_score integer NOT NULL,
  i1_score integer NOT NULL,
  i2_score integer NOT NULL,
  i3_score integer NOT NULL,
  seo_score integer NOT NULL,
  accesibility_score integer NOT NULL,
  performance_score integer NOT NULL,
  CONSTRAINT automatic_evaluation_pkey PRIMARY KEY (id)
);
CREATE TABLE public.cat_task (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  description text NOT NULL,
  CONSTRAINT cat_task_pkey PRIMARY KEY (id)
);
CREATE TABLE public.resource (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  url text NOT NULL UNIQUE,
  automatic_evaluation_id uuid,
  CONSTRAINT resource_pkey PRIMARY KEY (id),
  CONSTRAINT resource_automatic_evaluation_id_fkey FOREIGN KEY (automatic_evaluation_id) REFERENCES public.automatic_evaluation(id)
);
CREATE TABLE public.search_session (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  user_id uuid NOT NULL,
  CONSTRAINT search_session_pkey PRIMARY KEY (id),
  CONSTRAINT search_session_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id)
);
CREATE TABLE public.task_session (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  feeling_score smallint NOT NULL,
  complexity_score smallint NOT NULL,
  start_at timestamp with time zone NOT NULL,
  search_session_id uuid NOT NULL,
  end_at timestamp with time zone NOT NULL,
  cat_task_id uuid NOT NULL,
  CONSTRAINT task_session_pkey PRIMARY KEY (id),
  CONSTRAINT task_search_session_id_fkey FOREIGN KEY (search_session_id) REFERENCES public.search_session(id),
  CONSTRAINT task_session_cat_task_id_fkey FOREIGN KEY (cat_task_id) REFERENCES public.cat_task(id)
);
CREATE TABLE public.task_session_resource (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  task_session_id uuid NOT NULL,
  resource_id uuid NOT NULL,
  pertinence_score smallint NOT NULL,
  navigated_at timestamp with time zone NOT NULL,
  scored_at timestamp with time zone NOT NULL,
  CONSTRAINT task_session_resource_pkey PRIMARY KEY (id),
  CONSTRAINT task_session_resource_task_session_id_fkey FOREIGN KEY (task_session_id) REFERENCES public.task_session(id),
  CONSTRAINT task_session_resource_resource_id_fkey FOREIGN KEY (resource_id) REFERENCES public.resource(id)
);