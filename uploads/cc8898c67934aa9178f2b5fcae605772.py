#Area of circle 
r = int(input("Enter the radius of circle = "))
print(f"The Area of cicle having radius {r} is {3.14*r*r}")

#Area of rectangle 
l = int(input("Enter side of rectangle = "))
print(f"The area of rectangle having side {l} is {l*l}")

#Area of triangle
b = int(input("Enter base of triangle = "))
h = int(input("Enter height of triangle = "))
print(f"The area of triangle is {1/2*b*h}")

#swap two numbers
x = int(input("Enter first number = "))
y = int(input("Enter second number = "))
print(f"Before swapping x = {x} and y = {y}")
x,y = y,x
print(f"After swapping x = {x} and y = {y}")

#kilometers to miles
length = int(input("Enter length in kilometers = "))
print(f"{length} km in miles = {0.621*length} miles")

#celcius to faranhite
temp = int(input("Enter tempreture in celcius = "))
print(f"Tempreture in faranhite is {9/5*temp+32}")

#currency conversion
rupp = int(input("Enter indian rupees = "))
print(f"conversion of indian {rupp} ruppees into japanes yen is {1.7*rupp}")
