package model;

import java.io.Serializable;

public class UserModel implements Serializable {
    private String login;
    private String pwd;
    private String lastName;
    private String surName;
    private String role;

    public UserModel(String login, String pwd) {
        this.login = login;
        this.pwd = pwd;
        this.lastName = "bob";
        this.surName = "bob";
        this.role = "op";
    }

}

