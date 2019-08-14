package blockly;

import cronapi.*;
import cronapi.rest.security.CronappSecurity;
import java.util.concurrent.Callable;


@CronapiMetaData(type = "blockly")
@CronappSecurity
public class QRCODE2 {

public static final int TIMEOUT = 300;

/**
 *
 * @return Var
 */
// QRCODE2
public static Var Executar() throws Exception {
 return new Callable<Var>() {

   private Var item = Var.VAR_NULL;

   public Var call() throws Exception {
    item = Var.VAR_NULL;
    cronapi.util.Operations.callClientFunction(Var.valueOf("cronapi.screen.changeValueOfField"), Var.valueOf("vars.QRCODE"), Var.valueOf("https://www.globo.com/"));
    return Var.VAR_NULL;
   }
 }.call();
}

}

