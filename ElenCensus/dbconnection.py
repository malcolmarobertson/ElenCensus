import pyodbc
server = 'Enk-sql01.swh.mweb.co.za'
database = 'm5699140_aWare'
username = 'm5699140_sysadmin'
password = 'Sysadm1!'
driver='/usr/local/lib/libmsodbcsql.13.dylib'


cnxn = pyodbc.connect('DRIVER={ODBC Driver 17 for SQL Server};SERVER=Enk-sql01.swh.mweb.co.za;DATABASE=m5699140_aWare;UID=m5699140_sysadmin;PWD=Sysadm1!')
cursor = cnxn.cursor()


cursor.execute("SELECT TOP 100 * FROM cen_Census")
rows = cursor.fetchall()
for row in rows:
    print(row)
cursor.close()
cnxn.close()




