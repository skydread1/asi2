package webRest;

public class UserModel {
    private String login;
    private String pwd;
    private String lastName;
    private String surName;
    private String role;

    public UserModel(String login, String pwd) {
        this.login = login;
        this.pwd = pwd;
    }
}

