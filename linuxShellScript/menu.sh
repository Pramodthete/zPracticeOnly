while true;
do

echo -e "1.Pattern\n2.GCD\n3.float no.\n4.give permission to user\n5.count the word occurence\n6.count no. of words\n7.count of word -is-\n8.exit\n"

echo -n "Enter Your Choice : "


read choice

case $choice in
	1)
echo "Printing a pattern"

echo "Enter the number of rows"
read rows

for (( i=1; i<=rows; i++ ))
do
        for (( j=1; j<=i; j++ ))
        do
            echo -n " "
        done
        for (( k=rows; k>=i; k-- ))
        do
  echo -n "$k "
        done
        echo ""
done
		;;
	2)
	echo -n "No1: "
	read no1
	echo -n "No2: "
	read no2
	
	rs1=`expr $no1 % $no2`
	echo "$no1 % $no2 = $rs1"
	rs2=`expr $no2 % $rs1`
	echo "$no2 % $rs1 = $rs2"
	rs3=`expr $rs1 % $rs2`
	echo "$rs1 % $rs2 = $rs3"
	rs4=`expr $rs2 % $rs3`
	echo "$rs2 % $rs3 = $rs4"
	echo "GCD of $no1 and $no2 is $rs4"

		;;
	3)	
	echo "Enter two float no"
	read num1 num2
	echo "$num1 + $num2" | bc
		;;
	4)
	chmod +x linux.txt
	echo "permission added successfully"
		;;
	5)
	grep -c "is" linux.txt
		;;
	6)
	wc -w linux.txt
		;;
	7)
	fgrep -c -w "is" linux.txt
		;;
	8)
	 exit
	 ;;
	*)
		echo "Invalid choice"
		;;
esac
done
