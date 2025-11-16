SELECT
	RESOURCE_ID,
	PERTINENCE_SCORE,
	COUNT(*) CONTEO
FROM
	PUBLIC.TASK_SESSION_RESOURCE
WHERE
	PERTINENCE_SCORE IS NOT NULL
GROUP BY
	RESOURCE_ID,
	PERTINENCE_SCORE
HAVING
	COUNT(*) >= 2
ORDER BY
	RESOURCE_ID DESC,
	PERTINENCE_SCORE DESC;

SELECT
	*
FROM
	PUBLIC.TASK_SESSION_RESOURCE
WHERE
	RESOURCE_ID = '336dc8a8-e3c7-4f4a-b00f-0beb350dbddf';

DROP FUNCTION obtener_recursos_pertinencia_conteo();
CREATE OR REPLACE FUNCTION PUBLIC.OBTENER_RECURSOS_PERTINENCIA_CONTEO () RETURNS JSONB LANGUAGE PLPGSQL AS $$
DECLARE RESULT JSONB;
BEGIN
	SELECT COALESCE(jsonb_agg(to_jsonb(t)), '[]'::jsonb)
	INTO RESULT
	FROM (
        SELECT
            resource_id,
            pertinence_score,
            COUNT(*) AS conteo
        FROM
            public.task_session_resource
        WHERE
            pertinence_score IS NOT NULL
        GROUP BY
            resource_id,
            pertinence_score
        ORDER BY
            resource_id DESC,
            pertinence_score DESC
	) T;

	RETURN RESULT;
END;
$$;