

export const formatDate = (isoDate: string) => {
    const date = new Date(isoDate);
    const formattedDate = new Intl.DateTimeFormat('es-AR', {
        dateStyle: 'short',  // O puedes usar 'short', 'medium', 'long' según necesites
        timeStyle: 'short',  // Puedes cambiarlo a 'short' o 'medium' según tus necesidades
        timeZone: 'America/Argentina/Buenos_Aires'
      }).format(date);
    return formattedDate;
    }