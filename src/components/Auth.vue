<template>
    <div class="login-page">
        <div class="login-form card">
            <div class="login-form__title">Оценка жилой недвижимости</div>
            <div class="login-form__img">
                <img src="../assets/img/welcome_img.png">
            </div>
            <p class="login-form__text">Сервис оценки стоимости жилой недвижимости на основании публичных данных об аналогах.</p>
            <div class="login-form__title-2">НЕОБХОДИМА АВТОРИЗАЦИЯ</div>
            <form class="styled-form" novalidate>
                <div class="login-form__row">
                    <label class="label">Логин</label>
                    <div class="control">
                        <input
                            class="styled-input"
                            type="text"
                            v-model="formControl.login"
                            @keyup.enter="submit"
                        >
                        <label v-if="danLog" class="error-field">Введите логин</label>
                    </div>
                </div>
                <div class="login-form__row">
                    <label class="label">Пароль</label>
                    <div class="control">
                        <input
                            class="styled-input"
                            type="password"
                            v-model="formControl.password"
                            @keyup.enter="submit"
                        >
                        <label v-if="danPas" class="error-field">Введите пароль</label>
                    </div>
                </div>

                <label class="styled-checkbox">
                    <input type="checkbox" v-model="formControl.remember">
                    <span class="checkmark"></span>
                    Запомнить меня
                </label>

                <div class="login-form__btn-container">
                    <label v-if="errorMessage && errorMessage.length"
                        class="error-field"
                    >{{errorMessage}}</label>
                    <button class="btn btn--orange" @click="submit">Войти</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            formControl: {
                login: null,
                password: null,
                remember: false
            },
            danPas: false,
            danLog: false,
            errorMessage: []
        }
    },
    methods: {
        submit() {
            if (this.checkForm());
            const data = {
                "login": this.formControl.login,
                "password": this.formControl.password
            }
            fetch("https://realestate.eliz.site/login_front", {
                method: "POST",
                headers: {
                    "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
                },
                body: JSON.stringify(data)
            })
                .then(response => {
                    if (response.status !== 200) {
                        return;
                    }
                    response.json().then(data => {
                        localStorage.setItem("token", data.token);
                        this.$emit("trueAuth", data.token);
                        // Добавить оповещение, если пароль неверный
                        // Добавить оповещение, что сервер недоступен
                        // Добавить прелоадер
                    });
                })
                .catch(err => {
                    return err;
                });
        },
        checkForm() {
            if (this.formControl.login && this.formControl.password) {
                return true;
            }
            this.errorMessage = [];
            if (!this.formControl.login) {
                this.errorMessage = "Требуется указать логин. "
            }
            if (!this.formControl.password) {
                this.errorMessage += "Требуется указать пароль."
            }
            return false;
        }
    }
};
</script>

<style lang="scss">
.auth {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    h1 {
        color: #888;
    }
}
</style>
