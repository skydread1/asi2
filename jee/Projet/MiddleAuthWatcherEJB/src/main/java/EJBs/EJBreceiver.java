package EJBs;

import EJBclient.IEJBreceiver;
import model.UserModel;

import javax.annotation.Resource;
import javax.ejb.LocalBean;
import javax.ejb.Stateless;
import javax.inject.Inject;
import javax.jms.*;
import java.io.Serializable;
import java.util.HashMap;
import java.util.Map;

@Stateless
@LocalBean
public class EJBreceiver implements IEJBreceiver {
    @Inject
    JMSContext context;

    @Resource(mappedName = "java:/jms/queue/watcherqueue")

    private Queue queue;

    public UserModel receiveUser() {
    // TODO create a consumer
    //TODO Wait 1s incoming message (UserModel)
        JMSConsumer consumer = context.createConsumer(queue);

        Message m = consumer.receive(1000);

        try {
            if (m instanceof ObjectMessage) {
                UserModel user = (UserModel) ((ObjectMessage) m).getObject();
                return user;
            }
        }
        catch (JMSException e){
            e.printStackTrace();
        }
        return new UserModel("error","error");
    }
}