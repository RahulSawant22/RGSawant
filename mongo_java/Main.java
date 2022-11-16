import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;

public class Main {
    public static void main(String[] args) {

        MongoClients client = MongoClients.create("mongodb+srv://testUser:Rajsawant12@bmiatm.oi6cmmk.mongodb.net/?retryWrites=true&w=majority");
        MongoDatabase db = client.getDatabase("sampleDB");

        MongoCollection  col  = db.getCollection("sampleCollection");
    }
}
