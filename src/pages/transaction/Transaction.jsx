import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import { useQueryParams } from '../../hooks';

const childrenCenterStyle = {
  height: '100vh',
  width: '100vw',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const statusesText = {
  PENDING: 'La transacción está pendiente',
  APPROVED: 'La transacción fue aprobada',
  DECLINED: 'La transacción fue rechazada',
  ERROR: 'Hubo un error en transacción',
  VOIDED: 'Ups hubo un problema en transacción',
};

export function Transaction() {
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState(null);
  const [noId, setNoId] = useState(false);
  const id = useQueryParams('id');

  useEffect(async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(`https://sandbox.wompi.co/v1/transactions/${id}`);
      setStatus(data.data.status);
      setIsLoading(false);
    } catch (error) {
      setNoId(true);
    }
  }, [id]);

  if (noId) {
    return (
      <Redirect to="/" />
    );
  }

  if (isLoading) {
    return (
      <div style={childrenCenterStyle}>
        <p>Cargando...</p>
      </div>
    );
  }

  return (
    <div style={childrenCenterStyle}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <p>
          {statusesText[status]}
        </p>
        <Link to="/">Volver al inicio</Link>
      </div>
    </div>
  );
}
