from os import getenv
import pymssql

server = 'Enk-sql01.swh.mweb.co.za'
user = 'm5699140_sysadmin'
password = 'Sysadm1!'

conn = pymssql.connect(server, user, password, 'm5699140_aWare')
cursor = conn.cursor()
