#!bin/bash
for FILE in *  */**/* */**/**/* */**/**/**/*
do
cwebp -q 80 "$FILE" -o "${FILE%.jpg}.webp"
$trimmed=$(basename $FILE .jpg .png)
done