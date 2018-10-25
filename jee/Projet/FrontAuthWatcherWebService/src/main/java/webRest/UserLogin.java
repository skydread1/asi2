package webRest;

public class UserLogin {
    private String login;
    private String pwd;

    public UserLogin(String login, String pwd) {
        this.login = login;
        this.pwd = pwd;
    }

    public String getLogin() {
        return login;
    }

    public String getPwd() {
        return pwd;
    }
}
