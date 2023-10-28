
CreateThread(function()
    while true do
        local msec = 1000;
		SendNUIMessage({
			action = "updatePlayerId";
			id = GetPlayerServerId(PlayerId());
		})
        Wait(msec)
    end
end)