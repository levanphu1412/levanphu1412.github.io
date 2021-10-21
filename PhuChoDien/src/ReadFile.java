import java.awt.*;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
class ReadFile {


    public static void main(String args[]) throws IOException, InterruptedException {
        File file = new File("G:\\PhuChoDien\\src\\bap.txt");
        if(!file.exists()) {
            file.createNewFile();
        }
        FileInputStream fileInputStream = new FileInputStream(file);
        int c = fileInputStream.read();

        while (c != -1) {
            System.out.print((char) c);
//            Thread.sleep(0,00001);
            c = fileInputStream.read();
        }
        fileInputStream.close();

    }
}