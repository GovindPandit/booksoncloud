			var x;
			var count=0;

			myFunction();
			function myFunction()
			{
				x=document.getElementsByClassName("mySlider");
				for(i=0;i<x.length;i++)
				{
					x[i].style.display="none";
				}
				
				count++;
				if(count>6)
				{
					count=1;
				}
			
				x[count-1].style.display="block";
			
				setTimeout(myFunction,3000);
			}				
