class Solution {
    public int mySqrt(int x) {
        int i;
        for(i =0;i<=46340;i++){
            int ans1 = i*i;
            long ans2 = (long)(i+1)*(i+1);
            if(ans1<=x && x<ans2){
                break;
            }
        }
        return i;  
    }
}