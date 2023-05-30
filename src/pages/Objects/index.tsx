import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import Button from 'antd/es/button';
import Paragraph from 'antd/es/typography/Paragraph';

import { useApi } from '../../app/providers/with-api';

import { objectsPaths } from './routes';

const Objects = () => {
  const navigate = useNavigate();

  const api = useApi();

  useEffect(() => {
    api.partners.partnersControllerFindAll({ skip: 0, take: 10 }).then((d) => console.log(d));
  }, []);

  return (
    <div>
      <Paragraph>Список объектов</Paragraph>
      <Button type="primary" onClick={() => navigate(objectsPaths.modify)} size="large">
        Создать объект
      </Button>
    </div>
  );
};

export default Objects;
