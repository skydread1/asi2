package EJBs;

import javax.annotation.Resource;
import javax.ejb.ActivationConfigProperty;
import javax.ejb.LocalBean;
import javax.ejb.MessageDriven;
import javax.ejb.Stateless;
import javax.inject.Inject;
import javax.jms.JMSContext;
import javax.jms.JMSException;
import javax.jms.ObjectMessage;
import javax.jms.Topic;

import EJBclient.IEJBsender;
import model.UserModel;

import java.io.Serializable;

/*@MessageDriven(name = "HelloWorldMDB", activationConfig = {
@ActivationConfigProperty(propertyName = "destinationType", propertyValue = "java:/jms/watcherAuthJMS"),  // Topic
@ActivationConfigProperty(propertyName = "destination", propertyValue = "topic"),  // Nom JNDI
@ActivationConfigProperty(propertyName = "acknowledgeMode", propertyValue = "Auto-acknowledge") })  // Configuration pour reconnaitre automatiquement les messages recus*/


@Stateless
@LocalBean
public class EJBsender implements IEJBsender{
    @Inject
    JMSContext context;
    @Resource(mappedName = "java:/jms/watcherAuthJMS")
    Topic topic;
    public void sendMessage(String message) {

    }
    public void sendUser(UserModel user) {
        context.createProducer().send(topic,user);
    }
}


