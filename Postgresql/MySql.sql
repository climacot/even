select * from luka.log_112025 order by fecha desc limit 10;
select * from luka.lk_comercios;
select * from luka.lk_movimientos order by fch_proceso desc limit 10;
select * from luka.lk_transaccion;
select * from luka.lk_bolsillos;
select * from luka.lk_usuarios where num_identificacion = '1083931167';
select * from luka.lk_bolsillos where id_usuario = 29;

select * from info_data.viaticos_ingreso_jefes where usuario = "53153116";
select * from info_data.viaticos_ingreso_funcionarios where usuario = "53153116";
#delete from info_data.viaticos_ingreso_jefes where usuario = "53153116";
#delete from info_data.viaticos_ingreso_funcionarios where usuario = "53153116";