CREATE DATABASE EPSA

CREATE TABLE IF NOT EXISTS public.tipo_cliente
(
    id_tipo_cliente integer NOT NULL DEFAULT,
    nombre_tipo_cliente character varying(255) NOT NULL,
    descripcion_tipo_cliente character varying(255) NOT NULL,
    CONSTRAINT tipo_cliente_pkey PRIMARY KEY (id_tipo_cliente)
)
