import React, { useState } from 'react'
import { Modal, Box, Typography, TextField, Button, IconButton, Divider, MenuItem } from "@mui/material";
import { useForm } from "react-hook-form";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import CloseIcon from "@mui/icons-material/Close";
import LoginIcon from "@mui/icons-material/Login";
const SignInModal = () => {
  const [open, setOpen] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log("Données du formulaire:", data);
  };
  console.log("État du modal :", open);

  return (
    <>
      <MenuItem onClick={() => setOpen(true)} sx={{ color: "var(--primary-color)" }}>
      <LoginIcon sx={{ marginRight: 1 }}  />
        SignIn
      </MenuItem>

      <Modal open={open}  onClose={() => setOpen(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: 300, sm: 400, md: 450 },
            bgcolor: "white",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          {/* Bouton de fermeture */}
          <IconButton
            sx={{ position: "absolute", top: 10, right: 10 }}
            onClick={() => setOpen(false)}
          >
            <CloseIcon />
          </IconButton>

          {/* Titre */}
          <Typography variant="h5" align="center" fontWeight="bold" gutterBottom>
            Connexion
          </Typography>

          {/* Formulaire */}
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Email */}
            <TextField
              fullWidth
              label="Email"
              margin="normal"
              {...register("email", { required: "L'email est requis" })}
              error={!!errors.email}
              helperText={typeof errors.email?.message === 'string' ? errors.email.message : undefined}
            />

            {/* Mot de passe */}
            <TextField
              fullWidth
              label="Mot de passe"
              type="password"
              margin="normal"
              {...register("password", { required: "Le mot de passe est requis" })}
              error={!!errors.password}
              helperText={typeof errors.password?.message === 'string' ? errors.password.message : undefined}
            />

            {/* Bouton "Mot de passe oublié ?" */}
            <Button sx={{ mt: 1, mb: 2, textTransform: "none" }}>
              Mot de passe oublié ?
            </Button>

            {/* Bouton de soumission */}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 1 }}
            >
              Se connecter
            </Button>
          </form>

          {/* Séparation */}
          <Divider sx={{ my: 2 }} />

          {/* Connexion avec Google et GitHub */}
          <Button
            fullWidth
            variant="outlined"
            startIcon={<GoogleIcon />}
            sx={{ mb: 1, textTransform: "none" }}
          >
            Se connecter avec Google
          </Button>

          <Button
            fullWidth
            variant="outlined"
            startIcon={<GitHubIcon />}
            sx={{ textTransform: "none" }}
          >
            Se connecter avec GitHub
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default SignInModal;

