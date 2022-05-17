git add .
git commit -m "提交代码"
x=1
while [ $x -le 1000 ]
do
  echo "x = $x"
  x=$(( $x + 1 ))
  git push
done