const required = v => !!v || "O campo deve ser preenchido"
const email = v => /.+@.+\..+/.test(v) || "E-mail precisa ser válido"
const min = v => v.length >= 6 || "A senha dever ter no mínimo 6 dígitos"

export { required, email, min }
