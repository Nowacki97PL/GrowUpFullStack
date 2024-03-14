import psycopg2

conn = psycopg2.connect(
    host="postgres",
    database="Grow",
    user="username",
    password="password"
)

cur = conn.cursor()
cur.execute("SELECT current_timestamp;")
current_timestamp = cur.fetchone()[0]
print("Aktualny czas w bazie danych:", current_timestamp)
cur.close()
conn.close()