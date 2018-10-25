package webRest;

import model.UserModel;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;

@Path("/login")
public interface IWatcherAuth {
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    UserModel add(UserLogin userLogin);
}
