import { world, DimensionLocation } from "@minecraft/server";
import { ModalFormData } from "@minecraft/server-ui";

function showBasicModalForm(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
  const players = world.getPlayers();

  const modalForm = new ModalFormData().title("§o§7ModalFormData§r 的示例模态控件");

  modalForm.toggle("无默认值的切换开关");
  modalForm.toggle("有默认值的切换开关", true);

  modalForm.slider("无默认值的滑块", 0, 50, 5);
  modalForm.slider("有默认值的滑块", 0, 50, 5, 30);

  modalForm.dropdown("无默认值的下拉菜单", ["选项 1", "选项 2", "选项 3"]);
  modalForm.dropdown("有默认值的下拉菜单", ["选项 1", "选项 2", "选项 3"], 2);

  modalForm.textField("无默认值的输入框", "在此输入文本");
  modalForm.textField("有默认值的输入框", "在此输入文本", "这是默认值");

  modalForm
    .show(players[0])
    .then((formData) => {
      players[0].sendMessage(`模态表单结果: ${JSON.stringify(formData.formValues, undefined, 2)}`);
    })
    .catch((error: Error) => {
      log("显示表单失败: " + error);
      return -1;
    });
}