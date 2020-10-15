arr1= [1, 3, 5]
arr2= [2, 3, 4]

def merge_arrays(arr1, arr2):
    result=arr1 + arr2
    sorted_result=sorted(list(set(result)))
    
    return sorted_result
    
result=merge_arrays(arr1, arr2)
print(result)