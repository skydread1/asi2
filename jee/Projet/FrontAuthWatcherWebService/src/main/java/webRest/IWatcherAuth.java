package webRest;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.List;

@Path("/login")
public interface IWatcherAuth {
    @GET
    @Produces(MediaType.APPLICATION_JSON)

    UserModel add(@QueryParam("auth") List<String> a);
}
