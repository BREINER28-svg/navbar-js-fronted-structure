import math

a=[3,-2,1]
b=[-1,4,-3]

Ax=[0]
Ay=[1]
Az=[2]

Bx=[0]
By=[1]
Bz=[2]

print("Vector A=",Ax,"i +",Ay,"j+",Az,"k",sep="")
print("Vector B=",Bx,"i+",By,"j+",Bz,"k",sep="")

Apb=Ax * Bx+Ay * By+Az * Bz

print("el producto punto a. b es =",Apb)

MagA=math.sqrt(Ax**2+Ay**2+Az**2)
MagB=math.sqrt(Bx**2+By**2+Bz**2)

print(MagA)
print(MagB)
