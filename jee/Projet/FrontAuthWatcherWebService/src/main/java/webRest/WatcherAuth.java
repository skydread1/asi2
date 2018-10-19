package webRest;

import javax.ws.rs.QueryParam;
import java.util.List;

public class WatcherAuth implements IWatcherAuth{

    public UserModel add(List<String> a){
        UserModel userModel = new UserModel(a.get(0),a.get(1));
        return userModel;
    }
}
