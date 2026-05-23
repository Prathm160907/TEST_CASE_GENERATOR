n = int(input("Enter the number = "))
def factorial(n):
    if(n==0):
        return 1
    if(n<0):
        n = n*-1
    fact = 1
    for i in range(1,n+1):
        fact *=i
    return fact
print(factorial(n))
