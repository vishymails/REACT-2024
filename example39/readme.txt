Fix the open ssl issue 

by part 1
 npm audit fix --force


part  2

update package.json 

"scripts": {
    "start": "react-scripts --openssl-legacy-provider start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
}

