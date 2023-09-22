#!/usr/bin/python3


"""
Concept tested:  SQL Injection

A script that takes in an argument and displays all values in the states table
 of hbtn_0e_0_usa where name matches the argument.
"""


if __name__ == "__main__":
    import sys
    import MySQLdb
    db = MySQLdb.connect(user=sys.argv[1], passwd=sys.argv[2], db=sys.argv[3])

    cursor = db.cursor()
    value = ""
    for char in sys.argv[4]:
        if (char == "'" or char == '"'):
            continue
        if (char == ';'):
            break
        if (char != ';'):
            value = value + char
    # sub_query = "SELECT id  FROM states WHERE name = '%s' LIMIT 1" % (value)

    cursor.execute("SELECT name FROM cities WHERE\
                    state_id = (SELECT id  FROM states\
                    WHERE name = '%s' LIMIT 1)\
                    " % (value))
    result = cursor.fetchall()
    mystr = ''
    i, j = 0, 0
    for i in range(len(result)):
        for j in range(len(result[i])):
            mystr = mystr + result[i][j] + ', '

    print(mystr[:-2])

    cursor.close()
    db.close()
