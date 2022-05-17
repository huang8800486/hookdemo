x=1
while [ $x -le 1000 ]
do
  echo "x = $x"
  x=$(( $x + 1 ))
  git pull
done