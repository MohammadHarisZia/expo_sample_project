import * as React from 'react';

import { BrandingContainer } from '@/components/branding-container';
import { FocusAwareStatusBar, Text } from '@/ui';

export default function Profile() {
  return (
    <>
      <FocusAwareStatusBar />
      <BrandingContainer gap={10} paddingBottom={65}>
        <Text className="text-xl font-bold dark:text-slate-700 ">Clinic</Text>
      </BrandingContainer>
    </>
  );
}
