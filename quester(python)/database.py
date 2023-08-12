import sqlite3

tahm = sqlite3.connect('quests.db')

t = tahm.cursor()

t.execute("""CREATE TABLES quests(
            quest text,
            priority text,
            completed text,
            level int,
            next level int,
            )""")

t.commit()
t.close()


