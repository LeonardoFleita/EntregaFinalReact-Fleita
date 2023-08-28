import { Button, TextField, ThemeProvider } from "@mui/material";

const Checkout = ({ handleS, handleC, errors, dark, theme }) => {
  return (
    <ThemeProvider theme={theme}>
      <main className={!dark ? "mainLight" : "mainDark"}>
        <article className="checkoutFormContainer">
          <h1>Datos del comprador</h1>
          <form onSubmit={handleS}>
            <div className="checkoutCampo">
              <TextField
                type="text"
                label="Nombre"
                name="nombre"
                variant="standard"
                onChange={handleC}
                error={!errors.nombre ? false : true}
                helperText={errors.nombre}
                size="small"
                color={!dark ? "primary" : "secondary"}
              />
              <TextField
                type="text"
                label="Apellido"
                name="apellido"
                variant="standard"
                onChange={handleC}
                error={!errors.apellido ? false : true}
                helperText={errors.apellido}
                size="small"
                className="withMargin"
                color={!dark ? "primary" : "secondary"}
              />
            </div>
            <div className="checkoutCampo">
              <TextField
                type="string"
                label="Teléfono"
                name="telefono"
                variant="standard"
                onChange={handleC}
                error={!errors.telefono ? false : true}
                helperText={errors.telefono}
                size="small"
                color={!dark ? "primary" : "secondary"}
              />
              <TextField
                label="E-mail"
                name="email"
                variant="standard"
                onChange={handleC}
                error={!errors.email ? false : true}
                helperText={errors.email}
                size="small"
                className="withMargin"
                color={!dark ? "primary" : "secondary"}
              />
              <TextField
                label="Repetir e-mail"
                name="repeat"
                variant="standard"
                onChange={handleC}
                error={!errors.repeat ? false : true}
                helperText={errors.repeat}
                size="small"
                color={!dark ? "primary" : "secondary"}
              />
            </div>
            <Button
              type="submit"
              sx={{ marginTop: "1rem", padding: "0" }}
              color={!dark ? "primary" : "secondary"}
            >
              Enviar
            </Button>
          </form>
        </article>
      </main>
    </ThemeProvider>
  );
};

export default Checkout;
