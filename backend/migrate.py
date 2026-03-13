import psycopg2

DATABASE_URL = "postgresql://postgres:root123@localhost:5432/campusiq"

try:
    conn = psycopg2.connect(DATABASE_URL)
    cur = conn.cursor()
    
    # Check if 'role' column exists before renaming
    cur.execute("""
        SELECT column_name 
        FROM information_schema.columns 
        WHERE table_name='users' and column_name='role';
    """)
    if cur.fetchone():
        print("Renaming 'role' to 'username'...")
        cur.execute("ALTER TABLE users RENAME COLUMN role TO username;")
        conn.commit()
        print("Migration complete!")
    else:
        print("Column 'role' not found. Checking if 'username' already exists...")
        cur.execute("""
            SELECT column_name 
            FROM information_schema.columns 
            WHERE table_name='users' and column_name='username';
        """)
        if cur.fetchone():
            print("'username' column already exists. No migration needed.")
        else:
            print("Adding 'username' column...")
            cur.execute("ALTER TABLE users ADD COLUMN username VARCHAR;")
            conn.commit()
            print("Migration complete!")

except Exception as e:
    print(f"Error: {e}")
finally:
    if 'conn' in locals() and conn:
        cur.close()
        conn.close()
