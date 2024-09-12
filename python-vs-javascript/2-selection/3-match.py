error = 404
#Python 3.10 added a match, case 
match error:
    case 400:
        print("Bad request")


    case 404:
        print("Not found")


    case 418:
        print("I'm a teapot")


    case _: #_ is a wildcard creating a default
        print("Something's wrong with the internet")

