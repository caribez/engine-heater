# engine-heater
Calculate how long you should use the engine heater depending on the outside temperature.

This uses a really simplistic and non-scientific way of calculating this. 
I've based it on the data supplied here: https://www.calix.se/support/vanliga-fraagor
They seem to be using an exponential function but I've settled for a linear interpolation between the minimum and maximum values they supplied.

The obvious way to improve this code is to find the corrext exponential function and use that to interpolate.
