package tryJava;

class page1{
    public static void main(String[] args) {
        int blockPageCount = 5;
		int currentPage = 3;
        int startPageNum = ((currentPage / blockPageCount) * blockPageCount) + 1;
		int blockPage = (currentPage / blockPageCount) + 1;
		int lastPageNum = ((currentPage / blockPageCount) + 1) * blockPageCount;

        System.out.println(startPageNum);
        System.out.println(blockPage);
        System.out.println(lastPageNum);
    }
}