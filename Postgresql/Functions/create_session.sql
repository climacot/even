CREATE OR REPLACE FUNCTION create_session (
  p_full_name text,
  p_feeling numeric,
  p_navigations jsonb,
  p_complex numeric,
  p_task_time_start timestamp,
  p_task_time_end timestamp,
  p_session_id uuid,
  p_cat_task_id uuid
) RETURNS VOID LANGUAGE PLPGSQL 
SET search_path = public
AS $$
DECLARE
  d_search_session_id uuid := gen_random_uuid();
  d_task_session_id uuid := gen_random_uuid();  
  d_automatic_evaluation_id uuid := gen_random_uuid();
  d_navigation_item jsonb;
  d_resource_id uuid;
  d_url text;
BEGIN
  INSERT INTO public.search_session (id, user_id) 
  VALUES (d_search_session_id, p_session_id);

  INSERT INTO public.task_session (id, search_session_id, cat_task_id, start_at, end_at, feeling_score, complexity_score) 
  VALUES (d_task_session_id, d_search_session_id, p_cat_task_id, p_task_time_start, p_task_time_end, p_feeling, p_complex);

  FOR d_navigation_item IN 
    SELECT * FROM jsonb_array_elements(p_navigations)
  LOOP  
    d_url := trim(lower((d_navigation_item->>'url')::text));

    SELECT id 
    INTO d_resource_id
    FROM public.resource
    WHERE url = d_url
    LIMIT 1;

    IF d_resource_id IS NULL THEN
      d_resource_id := gen_random_uuid();

      INSERT INTO public.resource (id, url)
      VALUES (d_resource_id, d_url);
    END IF;

    INSERT INTO public.task_session_resource (task_session_id, resource_id, pertinence_score, scored_at, navigated_at)
    VALUES (
      d_task_session_id,
      d_resource_id,
      (d_navigation_item->>'rated')::numeric,
      (d_navigation_item->>'ratedAt')::timestamp,
      (d_navigation_item->>'navigatedAt')::timestamp
    );

    d_resource_id := NULL;
  END LOOP;
END
$$;