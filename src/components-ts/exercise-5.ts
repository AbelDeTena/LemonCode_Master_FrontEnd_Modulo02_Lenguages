//SlothMachine
class SlothMachine {
  //variables
  private coin: number = 0;
  //methods
  private rule(): boolean {
    return Math.random() < 0.5 ? true : false;
  }

  private spin(): boolean[] {
    return [this.rule(), this.rule(), this.rule()];
  }

  public play(): void {
    this.coin += 1;
    const spin = this.spin();

    console.log(this.coin, spin);
    if (spin.every((element) => element === true)) {
      const text = `Congratulations!!! You won ${
        this.coin > 1 ? this.coin + " coins!!" : this.coin + " coin!!"
      }`;
      result.value = text;
      console.log(text);
      this.coin = 0;
    } else {
      const text = "Good luck next time!!";
      result.value = text;
      console.log(text);
    }
  }
}

const coin = document.getElementById("insertCoin-button") as HTMLButtonElement;
const result = document.getElementById(
  "SlothMachineResult"
) as HTMLInputElement;
const machine1 = new SlothMachine();
coin.addEventListener("click", machine1.play.bind(machine1));
