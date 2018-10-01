function mySettings(props) {
  return (
    <Page>
         <Select
            label="Theme"
            settingsKey="theme"
            options={[
               {
                 name: "mint",
                 value: {
                   foreground: "#00ffbe"
                 }
               },
               {
                 name: "aquamarine",
                 value: {
                   foreground: "#93FFE8"
                 }
               },
               {
                 name: "blue",
                 value: {
                   foreground: "#00d1fb"
                 }
               },
               {
                 name: "yellow",
                 value: {
                   foreground: "#fffa38"
                 }
               },
               {
                 name: "white",
                 value: {
                   foreground: "#FFFFFF"
                 }
               },
               {
                 name: "orange",
                 value: {
                   foreground: "#f57222"
                 }
               }
               ]
            }
          />
    </Page>
  );
}

registerSettingsPage(mySettings);
