package webRest;



import EJBclient.IEJBsender;
import EJBclient.IEJBreceiver;
import model.UserModel;

import javax.inject.Inject;


public class WatcherAuth implements IWatcherAuth {

    public UserModel add(UserLogin userLogin) {
        UserModel userModel = new UserModel(userLogin.getLogin(), userLogin.getPwd());
        return userModel;
    }

    //crash the deployment
    @Inject
    private IEJBsender iejbSender;

    @Inject
    private IEJBreceiver iejbReceiver;

}

