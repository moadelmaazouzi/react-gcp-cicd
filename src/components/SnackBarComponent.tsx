import React, { useState } from 'react';
import { Button, Snackbar, Alert } from '@mui/material';

const SnackbarComponent = () => {
  const [open, setOpen] = useState(false);  // État pour contrôler l'ouverture du Snackbar
  const [message, setMessage] = useState('');  // État pour stocker le message à afficher
  const [severity, setSeverity] = useState<'success' | 'error' | 'info' | 'warning'>('success');  // Niveau du message (succès, erreur, etc.)

  // Fonction pour ouvrir le Snackbar avec un message spécifique
  const showToast = (msg: string, severity: 'success' | 'error' | 'info' | 'warning') => {
    setMessage(msg);
    setSeverity(severity);
    setOpen(true);  // Ouvrir le Snackbar
  };

  // Fonction pour fermer le Snackbar
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* Bouton pour afficher le toast de succès */}
      <Button variant="contained" onClick={() => showToast('Opération réussie!', 'success')}>
        Afficher Toast de succès
      </Button>

      {/* Bouton pour afficher le toast d'erreur */}
      

      {/* Snackbar affiché */}
      <Snackbar
        open={open}  // Contrôle l'ouverture
        autoHideDuration={6000}  // Durée avant de se fermer automatiquement
        onClose={handleClose}  // Ferme le Snackbar
      >
        <Alert onClose={handleClose} severity={severity}>
          {message}  {/* Affiche le message dynamique */}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default SnackbarComponent;
