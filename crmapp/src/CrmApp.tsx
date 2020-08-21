import React from 'react';
import CrmAppLayout from './component/application/CrmAppLayout'
import CrmHeader from './component/crm/CrmHeader'
import CrmBody from './component/crm/CrmBody'
import Customer from './component/crm/Customer'
import Memos from './component/crm/Memos'

function CrmApp() {
  return (
    <CrmAppLayout
        header= { <CrmHeader /> }
        body= { <CrmBody /> }
      />
  );
}

export default CrmApp;
