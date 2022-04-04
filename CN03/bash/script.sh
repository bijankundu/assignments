#!/bin/bash

baseUrl="https://en.wikipedia.org/wiki/";

writeLinkToFile(){
    echo "Your required link is : "
    echo "${baseUrl}${searchTerm}"
    echo "URL Saved Successfully"
    echo  "${baseUrl}${searchTerm}">> "file.log"
}


if [ -z "$1" ]
then
    echo "Enter a search term";
    read searchTerm;
    echo "$searchTerm";
    writeLinkToFile;
else
    searchTerm="$*"
    echo "$searchTerm";
    writeLinkToFile;
fi

